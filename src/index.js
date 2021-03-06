import 'mc_picker'
// import Animated_GIF from 'animated_gif'
import Animated_GIF from 'animated_gif/dist/Animated_GIF.min'
import './styles.less'


const {head, body, styleSheets} = document
const elm = document.querySelector.bind(document)
const rootRule = getRules(':root').pop()

//
const ANIMATION = 'animation'
//

const rootRules = getRules(':root')
const paneRule = getRules('.pane').pop()

// const paneRuleCustom = createStyleSheetRule()
// console.log('paneRuleCustom',paneRuleCustom) // todo: remove log
const customSheet = createStyleSheet()
console.log('customSheet',customSheet) // todo: remove log

const elmContent = elm('.content')
const elmFrame = elm('#frame')
const elmPane = elm('.pane')

const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d')

const tempImg = document.createElement('img')
tempImg.addEventListener('load', onTempImageLoad)
tempImg.src = getForeignObject()

const targetImg = document.createElement('img')

const sequence = []

//
const inputEvent = new CustomEvent('input')

let frames
const elmFrames = elm('#frames')
const setFrames = ()=>frames = parseInt(elmFrames.value,10)
elmFrames.addEventListener('input',onInputFramesNum)
elmFrames.dispatchEvent(inputEvent)

elmFrame.addEventListener('input',onInputFrame)

const elmSize = elm('#size')
elmSize.addEventListener('input', onInputSize)
elmSize.dispatchEvent(inputEvent)

const elmTextarea = elm('textarea')
elmTextarea.addEventListener('input', onInputTextarea)
elmTextarea.dispatchEvent(inputEvent)

elm('#play').addEventListener('click', onPlayClick)
elm('#renderframe').addEventListener('click', onRenderFrameClick)
elm('#render').addEventListener('click', onRenderClick)

//

function onInputSize({target:{value}}){
  const size = 0.0625*value
  const size2 = 0.125*value
  const size2sqrt = Math.sqrt(2*(size2*size2))
  const size1sqrt = 0.5*size2sqrt
  const size0sqrt = 0.0*size1sqrt
	rootRule.style.setProperty('--size', `${size}rem`)
	rootRule.style.setProperty('--size2', `${size2}rem`)
	rootRule.style.setProperty('--size2sqrt', `${size2sqrt}rem`)
	rootRule.style.setProperty('--size1sqrt', `${size1sqrt}rem`)
	rootRule.style.setProperty('--size0sqrt', `${size0sqrt}rem`)
	setCanvasSize(elmPane.offsetHeight)
}

function onInputFrame({target:{value}}){
	rootRule.style.setProperty('--frame', value)
}

function onInputFramesNum(){
	setFrames()
	rootRule.style.setProperty('--frames', `${frames}`)
  elmFrame.setAttribute('max', frames)
}

function onInputTextarea({target:{value}}){
  customSheet.innerHTML = `.pane{
  ${value}
}`
	console.log('customSheet',customSheet) // todo: remove log
  // paneRuleCustom.cssText = `.pane{${target.innerText}}`
  // console.log('paneRuleCustom',paneRuleCustom) // todo: remove log
}

function onPlayClick(){
	animate(frames)
}

function onRenderFrameClick(){
	tempImg.src = getForeignObject(canvas.width)
}

function onRenderClick(){
	sequence.length = 0
	animate(frames, ()=>{
		tempImg.src = getForeignObject(canvas.width)
	}, ()=>{
		const size = canvas.width

		const ag = new Animated_GIF({
      palette: [0xFF0000,0x0000FF,0x00FF00,0x000000] // doesn't work?
    })
    console.log('ag',ag) // todo: remove log
    // ag.onRenderProgress(cb)
		ag.setSize(size, size)
		ag.setDelay(40)
		sequence.forEach(ag.addFrame.bind(ag))

		const animatedImage = document.createElement('img')
		animatedImage.classList.add(ANIMATION)
		ag.getBase64GIF(src=>{
				animatedImage.src = src
				const prev = elmContent.querySelector(`.${ANIMATION}`)
				prev&&elmContent.removeChild(prev)
				elmContent.appendChild(animatedImage)
		})
	})
}

function onTempImageLoad(e){
  ctx.drawImage(e.target, 0, 0)
  targetImg.src = canvas.toDataURL()
	sequence.push(targetImg.cloneNode())
}

function animate(frame, step, done) {
	const part = (frames-frame)/frames
	//console.log('step',frame,part)
	rootRule.style.setProperty('--part', `${part}`)
	rootRule.style.setProperty('--frame', `${frame}`)
	step&&step()
	frame!==0&&requestAnimationFrame(animate.bind(null,frame-1,step,done))||done&&done()
}

function createStyleSheet(){
	const sheet = document.createElement('style')
	sheet.setAttribute('type','text/css')
	head.appendChild(sheet)
	console.log('createStyleSheet',sheet) // todo: remove log
	return sheet
}

// function createStyleSheetRule(){
// 	// // body.appendChild(document.createElement('style'))
//   // console.log('paneRule',paneRule) // todo: remove log
// 	// const sheet = paneRule.parentStyleSheet//document.styleSheets[document.styleSheets.length-1]
// 	// sheet.insertRule('.asdfqwerfoo {}', sheet.rules.length)
// 	// return sheet.rules[sheet.rules.length-1]
// 	body.appendChild(document.createElement('style'))
// 	const sheet = document.styleSheets[document.styleSheets.length-1]
// 	sheet.insertRule('x {}', 0)
// 	return sheet.rules[0]
// }

function setCanvasSize(size) {
	canvas.width = canvas.height = size
}

function getForeignObject(size){
	return 'data:image/svg+xml,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
	<foreignObject width="100%" height="100%">
	<div xmlns="http://www.w3.org/1999/xhtml">
		<style>
			${rootRules.reduce((acc,rule)=>acc+rule.cssText,'')}
			${paneRule.cssText}
			${customSheet.innerHTML}
		</style>
		<div class="pane"></div>
	</div>
	</foreignObject></svg>`)
}

/**
 * Traverse styleSheets in search of selector
 * @param selector {string}
 * @return {number}
 */
function getRules(selector) {
	const foundRules = []
	Array.from(document.styleSheets).forEach(sheet => {
		try {
			Array.from(sheet.rules).forEach(rule => rule.selectorText===selector&&foundRules.push(rule))
		} catch (err) {/*fails for sheet.rules on external sheets (fonts)*/
		}
	})
	return foundRules
}
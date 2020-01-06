import React, { useState, useEffect } from 'react'
import { Animated } from 'react-native'

export default (props) => {
	const { modalOpen } = props
	const [paddingAnim] = useState(new Animated.Value(0))
	const [opacityAnim] = useState(new Animated.Value(0))
	const [ shouldRender, setShouldRender ] = useState(modalOpen)
	
	useEffect(() => {
		if (modalOpen) {
			setShouldRender(true)
			openModal()
		} 

		if (!modalOpen) {
			timer = setTimeout(() => {
				setShouldRender(false)
			}, 200);
			closeModal()
		}

		return () => clearTimeout(timer)
	}, [modalOpen])

	const resetAnimations = () => {
		paddingAnim.setValue(0)
		opacityAnim.setValue(0)
	}

	const openModal = () => {
		Animated.sequence([
			Animated.timing(
				opacityAnim,
				{
					toValue: 1,
					duration: 200,
				}
			),
			Animated.spring(
				paddingAnim,
				{
					toValue: 5,
					duration: 100,
				}
			)]
		).start()
	}

	const closeModal = () => {
		Animated.parallel([
			Animated.timing(
				paddingAnim,
				{
					toValue: 50,
					duration: 200,
				}
			),
			Animated.timing(
				opacityAnim,
				{
					toValue: 0,
					duration: 200,
				}
			),]
		).start(() => resetAnimations());
	}

	if (!shouldRender) {
		return null
	}

	return (
		<Animated.View style={[
			{
				...styles.wrapper, 
				padding: paddingAnim, 
				opacity: opacityAnim
			}, 
			props.wrapperStyle
		]}>
			<Animated.View style={[
				{
					...styles.container,
					opacity: opacityAnim
				},
				props.containerStyle
			]}>
				{props.children}
			</Animated.View>	
		</ Animated.View>
	) 
}
 
const styles = {
	wrapper: {
		height: '100%', 
		width: '100%', 
		alignItems: 'center', 
		justifyContent: 'center', 
		position: 'absolute',
		zIndex: 100000,
		backgroundColor: 'rgba(0,0,0,0.8)',
	},
	container: {
		width: '95%',
		height: '95%',
		maxHeight: '95%',
		overflow: 'hidden',
		borderRadius: 15,
		borderWidth: 1,
		borderColor: 'rgba(100,100,100,1)',
		backgroundColor: 'rgba(240,240,240,0.96)',
	}
}

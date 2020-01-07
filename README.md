# react-native-modalizer
A fully customizable, animated modal component for React-Native

## Props

| Name     |   Type   |   Required   | Description  |
| :------- | :------: | :---------: | :----------- |
| modalOpen   | `bool` | yes  | Set true to open modal, set false to close |
| wrapperStyle  |  {}  |   optional   | Overwrite any default wrapper styles |
| onIndexChanged  |  {}  |   optional    | Overwrite any default modal content container styles |

## Example usage

```
export default (props) => {
  const [ modalOpen, setModalOpen] = useState(false)
  
	const modalContent = (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 3 }}>
        <Image 
          style={{ height: '100%', width: '100%'}}
          source={{uri: 'https://images.pexels.com/photos/3418058/pexels-photo-3418058.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 '}}
        />
      </ View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>This is a modal</Text> 
      </ View>
      <View style={{ flex: 1 }}>
        <Button title="Close modal" onPress={() => setModalOpen(false)}/>
      </ View>
    </View>
	)

  return (
    <ScreenContainer style={{ flex: 1 }} >
      <Modalizer modalOpen={modalOpen}>
        {modalContent}
      </ Modalizer>
    </ScreenContainer>
  )
}
```


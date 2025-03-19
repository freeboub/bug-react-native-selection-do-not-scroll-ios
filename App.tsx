import { NativeSyntheticEvent, Pressable, Text, TextInput, TextInputSelectionChangeEventData, View } from 'react-native';
import React, { useRef, useState } from 'react';

export default function RootLayout() {

  const sampleText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

  const [selection, setSelection] = useState({start: 1, end: 5});
  const [text, setText] = useState(sampleText);
  const textRef = useRef<TextInput>(null);

  const onPressChangeFocus = () => {
    setSelection({start: 1, end: 5});
  };

  const onPressChangeText = () => {
    setText(sampleText);
  };

  const onSelectionChange = (sel: NativeSyntheticEvent<TextInputSelectionChangeEventData>) => {
    setSelection(sel.nativeEvent.selection);
  }
  const onChangeText = (data: string) => {
    setText(data)
  }

  return (

    <View style={{flex: 1}}>
      {/* part one initial issue */}
      <TextInput style={{ top: 50, backgroundColor: 'red', flex: 1, maxHeight: 100 }}
               ref={textRef}
               multiline
               selection={{start: 0, end: 5}}
               >
        {sampleText}
      </TextInput>
      <View style={{height: 50}}/>
      {/* part two Full test of controled compoennt */}
      <TextInput style={{ top: 20, backgroundColor: 'red', flex: 1, maxHeight: 100 }}
               ref={textRef}
               multiline
               selection={selection}
               onSelectionChange={onSelectionChange}
               onChangeText={onChangeText}
               >
        {text}
      </TextInput>
      <View style={{ top: 50, flexDirection:'row' }}>
        <Pressable style={{height: 50, width: 50, backgroundColor: 'green'}} onPress={onPressChangeFocus}><Text>focus</Text></Pressable>
        <Pressable style={{height: 50, width: 50, backgroundColor: 'blue'}} onPress={onPressChangeText}><Text>changeText</Text></Pressable>
      </View>
    </View>
  )
}

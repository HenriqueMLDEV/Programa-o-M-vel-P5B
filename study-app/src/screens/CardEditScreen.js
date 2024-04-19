import { View, Text, TextInput, Button} from 'react-native'
import React, {useContext, useState, useEffect} from 'react'
import StudyCardsContext from '../contexts/StudyCardsContext'

const CardEditScreen = ({route, navigation}) => {

    const { id } = route.params || {}
    const { cards, addCard, updateCard} = useContext(StudyCardsContext)
    const card = cards.find(c => c.id === id) || {}

    const [title, setTitle] = useState(cards.title || '')
    const [notes, setNotes] = useState(cards.notes || '')
    const [status, setStatus] = useState(cards.status || '')

  return (
    <View>
      <Text>CardEditScreen</Text>
    </View>
  )
}

export default CardEditScreen
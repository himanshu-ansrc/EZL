import React, { useState, useCallback } from 'react'
import Card from './Card'
import update from 'immutability-helper'
const style = {
  width: 'auto',
}
const Container = () => {
  {
    const [cards, setCards] = useState([
      {
        id: 1,
        text: 'Write README',
      },
      {
        id: 2,
        text: 'Write README',
      },
      {
        id: 3,
        text: 'Write README',
      },
      {
        id: 4,
        text: 'Write README',
      },
      {
        id: 5,
        text:
          'Write README',
      },
      {
        id: 6,
        text: '???',
      },
      {
        id: 7,
        text: 'Write README',
      },
    ])
    const moveCard = useCallback(
      (dragIndex, hoverIndex) => {
        const dragCard = cards[dragIndex]
        setCards(
          update(cards, {
            $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
          }),
        )
      },
      [cards],
    )
    const renderCard = (card, index) => {
      return (
        <Card
          key={card.id}
          index={index}
          id={card.id}
          text={card.text}
          moveCard={moveCard}
        />
      )
    }
    return (
      <>
        <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
      </>
    )
  }
}
export default Container

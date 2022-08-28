export const MOCK_DIARY_CARD = {
    id: 6,
    author: 'chiachia',
    title: 'Shanghai',
    description: 'ambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recen',
    imgurl: 'https://images.unsplash.com/photo-1582420446474-c2e853288e14?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8c2hhbmdoYWl8fHx8fHwxNjYxNjg4NTY5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600'
  }
  
  export const MOCK_DIARIES = [
    MOCK_DIARY_CARD,
    { ...MOCK_DIARY_CARD, id: 4, title: 'Cairo' },
    { ...MOCK_DIARY_CARD, id: 5, title: 'Mumbai' }
  ]
  
const initialEvents = [
  {id: 1, title: "title1", body: "body1"},
  {id: 2, title: "title2", body: "body2"},
  {id: 3, title: "title3", body: "body3"},
  {id: 4, title: "title4", body: "body4"},
  {id: 5, title: "title5", body: "body5"},
]

export const events = (events = initialEvents, action) => {
  switch(action.type) {
    case "READ_EVENTS":
      return events;
    default:
      return events;
  }
}

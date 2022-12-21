export default function todoReducer(todo, action) {
  switch (action.type) {
    case "added": {
      // const {todo, state}
    }

    case "updated": {
    }

    case "deleted": {
    }

    default: {
      throw Error(`Error : ${action.type}`);
    }
  }
}

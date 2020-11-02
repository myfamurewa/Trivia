import {UPDATING_CATEGORY, UPDATING_NUMBER_OF_QUESTIONS, UPDATING_DIFFICULTY} from "../actions"
const initialState = {
    difficulty: "medium",
    numberofQuestions: 10,
    category: ""
}

export const reducer = (state = initialState, action) => {
    switch (action.type){
        case UPDATING_DIFFICULTY:
            console.log("difficuly updating", action.payload)
            return {
                ...state,
                difficulty: action.payload
            }
        case UPDATING_CATEGORY:
            return {
                ...state,
                category: action.payload
            }
        case UPDATING_NUMBER_OF_QUESTIONS:
            return {
                ...state,
                numberofQuestions: action.payload
            }
        default:
            return state
    }
}
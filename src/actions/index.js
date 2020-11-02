// {UPDATING_CATEGORY, UPDATING_NUMBER_OF_QUESTIONS, UPDATING_DIFFICULTY}
export const UPDATING_CATEGORY = "UPDATING_CATEGORY"
export const UPDATING_NUMBER_OF_QUESTIONS = 'UPDATING_NUMBER_OF_QUESTIONS'
export const UPDATING_DIFFICULTY = 'UPDATING_DIFFICULTY'

export const updateCategory = (category) => {
    return { type: UPDATING_CATEGORY, payload: category}
}

export const updateNumberOfQuestion = (number) => {
    return {type: UPDATING_NUMBER_OF_QUESTIONS, payload: number}
}

export const updateDifficulty = (difficulty) => {
    return {type: UPDATING_DIFFICULTY, payload: difficulty}
}
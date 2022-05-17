export interface IQuestBase {
  title: string,
  description: string
  questionsRef: string
}
export interface IQuest extends IQuestBase{
  id: string,
}

export interface IQuestion {
  questionText: string
  questionImage?: string
  answerText?: string
  answerImage?: string
  coords: string
}

export type QuestList = Array<IQuest>;
export type QuestionList = Array<IQuestion>;


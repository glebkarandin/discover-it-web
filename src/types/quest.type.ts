export interface IQuestBase {
  title: string,
  description: string
}
export interface IQuest extends IQuestBase{
  id: string,
}

export type QuestList = Array<IQuest>;


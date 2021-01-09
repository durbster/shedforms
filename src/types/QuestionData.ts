export enum QuestionTypes {
  TextInput = "TextInput",
  NumberInput = "NumberInput"
}

export type QuestionData = {
  id: string;
  label: string;
  type: QuestionTypes,
  answer: string;
}

export class ShedQuestion {
  id: string;
  label: string;
  answer: string;
  type: QuestionTypes;
  
  constructor(data: QuestionData) {
    this.id = data.id;
    this.label = data.label;
    this.answer = data.answer;
    this.type = data.type;
  }
}



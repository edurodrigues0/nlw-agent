export type GetRoomsResponse = Array<{
  id: string;
  name: string;
  questionsCount: number;
  createdAt: Date;
  isGenerateAnswer?: boolean;
}>;

import { apiRequest } from "./api";
import { readLearningData } from "../data/learningProgress";
import type { LearningRepository } from "../data/studySession";

export const createLearningRepository = (
  userId: string,
): LearningRepository => ({
  async load() {
    const response = await apiRequest<{ data: unknown }>("/api/progress", {
      headers: { "X-Account-Id": userId },
    });
    return readLearningData(response.data);
  },
  async save(data) {
    await apiRequest("/api/progress", {
      method: "PUT",
      headers: { "X-Account-Id": userId },
      body: JSON.stringify(data),
    });
  },
});

import { AxiosError } from "axios"
import axiosInstanceToBack from "../axios-instance"

export const postBusAlarm = async (id: number, alarm: boolean) => {
  try {
    await axiosInstanceToBack().post('/api/bus/alarm', {
      id, alarm
    })
  }
  catch (e) {
    if (e instanceof Error || e instanceof AxiosError)
      throw e
    else throw new Error("알 수 없는 에러")
  }
}
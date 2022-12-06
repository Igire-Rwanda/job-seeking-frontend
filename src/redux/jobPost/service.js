import axios from "axios";

export const createJobService = async (data) => {
  try {
      const res = await axios.post("http://localhost:4041/job",{headers:{
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYzOGRmYTY2ZTU4MTI4MGE2NGE5MWQxZiIsImZpcnN0bmFtZSI6ImNocmlzdGEiLCJsYXN0bmFtZSI6ImdhaG9uZ2F5aXJlIiwicGhvbmUiOiIwNzgyNDUzNjMyIiwiZW1haWwiOiJjaHJpc3RhQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiY2hyaXMiLCJwYXNzd29yZCI6bnVsbCwiaXNBY3RpdmUiOnRydWUsInJvbGUiOiJDbGllbnQiLCJjcmVhdGVkQXQiOiIyMDIyLTEyLTA1VDE0OjA0OjIyLjI5NloiLCJ1cGRhdGVkQXQiOiIyMDIyLTEyLTA1VDE0OjA0OjIyLjI5NloiLCJfX3YiOjB9LCJpYXQiOjE2NzAyNDkxNjIsImV4cCI6MTY3MDMzNTU2Mn0.eg96xXIROyozk-ix1vhTGD35aMwjRrhgpUMlQmfSYJU"
      }},data);
      return res;
  } catch (err) {
    console.log("error from services ...: ", err);
  }
};
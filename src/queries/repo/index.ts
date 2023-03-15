import { QueryFunctionContext, useQuery } from "@tanstack/react-query";

import { api } from "../../services/api";
import { Repo } from "./types";

type useFetchProps = {
  username: string
}

async function getRepos(ctx: QueryFunctionContext) {
  const [_queryKey, username] = ctx.queryKey

  const repos = await api.get<Repo[]>(`/users/${username}/repos`)
  return repos.data
}

export function useFetchRepos({ username }: useFetchProps) {
  return useQuery(['repos', username], getRepos)
}
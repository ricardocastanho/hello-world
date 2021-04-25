import { LastRankingLoader } from '@/domain/usecases'
import { Controller, HttpResponse, serverError, serverSuccess } from '@/presentation/contracts'
import { RankingScoreViewModel } from '@/presentation/view-models'

export class LoadLastRankingController implements Controller {
  constructor (private readonly lastRankingLoader: LastRankingLoader) {}

  async handle (): Promise<HttpResponse<RankingScoreViewModel[]>> {
    try {
      const ranking = await this.lastRankingLoader.load()

      return serverSuccess(RankingScoreViewModel.mapCollection(ranking))
    } catch (error) {
      return serverError(error)
    }
  }
}

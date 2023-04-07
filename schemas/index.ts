import blockContent from './blockContent'
import crewMember from './crewMember'
import castMember from './castMember'
import movie from './movie'
import person from './person'
import screening from './screening'
import plotSummary from './plotSummary'
import plotSummaries from './plotSummaries'
import performances from './performances'
import show from './show'

export const schemaTypes = [
  // Document types
  movie,
  person,
  screening,
  show,

  // Other types
  performances,
  blockContent,
  plotSummary,
  plotSummaries,
  castMember,
  crewMember,
]

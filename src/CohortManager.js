class CohortManager {
  constructor() {
    this.cohorts = []
    this.newCohortId = 0
  }

  createCohort(cohortName) {
    const cohortFound = this.cohorts.find((item) => item.name === cohortName)
    if (cohortFound) {
      throw new Error('Cohort name is already in use')
    } else {
      this.newCohortId++
      const newCohort = { id: this.newCohortId, name: cohortName, students: [] }
      this.cohorts.push(newCohort)
    }
  }
}

module.exports = CohortManager

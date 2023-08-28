/* eslint-disable semi */
import {
  ECreateProjectType,
  EUserLevel,
  EUserType,
  ERoles
} from './ProjectEnum'

export const radioOptions = [
  {
    label: 'Time & Material',
    value: ECreateProjectType.Time_material
  },
  {
    label: 'Fixed Fee',
    value: ECreateProjectType.Fixed_fee
  },
  {
    label: 'Non-Billable',
    value: ECreateProjectType.Non_billabel
  },
  {
    label: 'ODC',
    value: ECreateProjectType.Odc
  },
  {
    label: 'Product',
    value: ECreateProjectType.Product
  },
  {
    label: 'Training',
    value: ECreateProjectType.Training
  }
]

export const memberTypes = [
  {
    label: 'All',
    value: EUserType.All
  },
  {
    label: 'Staff',
    value: EUserType.Staff
  },
  {
    label: 'Internship',
    value: EUserType.Internship
  },
  {
    label: 'Collaborator',
    value: EUserType.Collaborator
  }
]

export const memberRoles = [
  {
    label: 'Member',
    value: ERoles.Member
  },
  {
    label: 'Project Manager',
    value: ERoles.Project_manager
  },
  {
    label: 'Shadow',
    value: ERoles.Shadow
  },
  {
    label: 'Deactive',
    value: ERoles.Deactive
  }
]

export const memberLevels = [
  {
    label: 'Intern 0',
    value: EUserLevel.Intern_0
  },
  {
    label: 'Intern 1',
    value: EUserLevel.Intern_1
  },
  {
    label: 'Intern 2',
    value: EUserLevel.Intern_2
  },
  {
    label: 'Prefresher',
    value: EUserLevel.Pre_fresher
  },
  {
    label: 'Fresher-',
    value: EUserLevel.Fresher_minus
  },
  {
    label: 'Fresher',
    value: EUserLevel.Fresher
  },
  {
    label: 'Fresher+',
    value: EUserLevel.Fresher_plus
  },
  {
    label: 'Junior-',
    value: EUserLevel.Junior_minus
  },
  {
    label: 'Junior',
    value: EUserLevel.Junior
  },
  {
    label: 'Junior+',
    value: EUserLevel.Junior_plus
  },
  {
    label: 'Middle-',
    value: EUserLevel.Middle_minus
  },
  {
    label: 'Middle',
    value: EUserLevel.Middle
  },
  {
    label: 'Middle+',
    value: EUserLevel.Middle_plus
  },
  {
    label: 'Senior-',
    value: EUserLevel.Senior_minus
  },
  {
    label: 'Senior',
    value: EUserLevel.Senior
  },
  {
    label: 'Senior+',
    value: EUserLevel.Senior_plus
  }
]

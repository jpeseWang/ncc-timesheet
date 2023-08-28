export enum EDatiTimeFormat {
  Date_format_DDMMYYYY = 'DD/MM/YYYY HH:mm A'
}

export enum EActionType {
  Get_all_projects = 'Get_all_projects',
  Get_project_quantity = 'Get_project_quantity',
  Filter_project_status = 'filter_project_status',
  Search_project = 'search_project',
  Delete_project = 'Delete_project',
  Active_project = 'Active_project',
  Deactive_project = 'Deactive_project',
  Get_all_customers = 'Get_all_customers',
  Get_all_user_not_pagging = 'Get_all_user_not_pagging',
  Get_all_branch_filter = 'Get_all_branch_filter',
  Get_all_task = 'Get_all_task'
}

export enum ERoles {
  Member = 0,
  Project_manager = 1,
  Shadow = 2,
  Deactive = 3
}

export enum EUserType {
  All = '',
  Staff = 0,
  Internship = 1,
  Collaborator = 2
}

export enum EProjectStatus {
  Active = 0,
  Deactive = 1,
  All = ''
}

export enum EViewProjectFilter {
  Week = 'Week',
  Month = 'Month',
  Quarter = 'Quarter',
  Year = 'Year',
  All_time = 'All time',
  Custom_time = 'Custom time'
}

export enum EProjectType {
  TSM = 'TSM',
  FF = 'FF',
  NB = 'NB',
  ODC = 'ODC'
}

export enum ECreateProjectType {
  Time_material,
  Fixed_fee,
  Non_billabel,
  Odc,
  Product,
  Training
}

export enum EUserLevel {
  Intern_0,
  Intern_1,
  Intern_2,
  Pre_fresher,
  Fresher_minus,
  Fresher,
  Fresher_plus,
  Junior_minus,
  Junior,
  Junior_plus,
  Middle_minus,
  Middle,
  Middle_plus,
  Senior_minus,
  Senior,
  Senior_plus
}

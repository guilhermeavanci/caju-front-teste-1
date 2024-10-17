export type ColumnsProps = {
	columns: ColumnsConfig
  };

export type Registration = {
	admissionDate: string,
	email: string,
	employeeName: string,
	status: ColumnStatus,
	cpf: string,
	id: string
}

export type ColumnStatus = 'REVIEW' | 'APPROVED' | 'REJECTED'

export type ColumnStyle = {
	backgroundColor: string
	color: string
}

export type ColumnsConfig = {
	[key in ColumnStatus]: {
		title: string,
		style?: {
			backgroundColor: string
			color: string
		},
		registrations?: {
			[key in string]: Registration
		}
	}
}
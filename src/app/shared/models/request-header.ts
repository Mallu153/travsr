export interface RequestDetails {
  requestId: number;
  customerId: number;
  contactId: number;
  requestType: null;
  priorityId: number;
  severityId: number;
  channelId: null;
  createdBy: number;
  createdDate: string;
  updatedBy: null;
  updatedDate: null;
  closedBy: null;
  closedDate: null;
  requestStatus: string;
  copy: null;
  copyFrom: null;
  copyTo: null;
  approverAssignedBy: null;
  approverId: null;
  approverStatus: null;
  approverRemarks: null;
  approverCreatedDate: null;
  approverCreatedBy: null;
  approverModifiedDate: null;
  approverModifiedBy: null;
  packageRequest: number;
  dmcFlag: number;
  customerName: string;
  contact: Contact;
}

export interface Contact {
  id: number;
  prefix: number;
  paxId: number;
  customerId: number;
  firstName: string;
  middleName: string;
  lastName: string;
  designationId: number;
  designationName: string;
  roleId: number;
  primaryEmail: string;
  primaryCCP: number;
  primaryPhoneNumber: number;
  secondaryEmail: string;
  secondaryCCP: number;
  secondaryPhoneNumber: number;
  telephoneNumber: number;
  remarksAndNotes: string;
  startDate: string;
  endDate: null;
  status: boolean;
  dob: null;
  passport: string;
  nationality: number;
  issuedCountry: number;
  createdBy: number;
  updatedBy: number;
  createdDate: string;
  updatedDate: string;
  dpImageUrl: string;
}

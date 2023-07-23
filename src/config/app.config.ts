interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Team Leader', 'App Admin'],
  tenantName: 'Organization',
  applicationName: 'Careers',
  addOns: ['chat', 'notifications', 'file'],
};

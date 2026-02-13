import type { categoryTypeEnum } from '../backend';

export const DISPUTE_CATEGORY_LABELS: Record<categoryTypeEnum, string> = {
  family: 'Family Mediation',
  business: 'Civil/Commercial Mediation',
  employment: 'Workplace/Employment Mediation',
  property: 'Landlord-Tenant Mediation',
  consumer: 'Consumer Disputes',
  neighborhood: 'Neighbourhood Disputes',
  divorce: 'Family Mediation (Divorce)',
  money: 'Financial Disputes',
};

export const DISPUTE_CATEGORIES = [
  {
    value: 'family' as categoryTypeEnum,
    label: 'Family Mediation',
    description: 'Addresses divorce, child custody, visitation rights, and property division.',
  },
  {
    value: 'business' as categoryTypeEnum,
    label: 'Civil/Commercial Mediation',
    description: 'Resolves disputes involving contracts, property damage, personal injury, and insurance claims.',
  },
  {
    value: 'employment' as categoryTypeEnum,
    label: 'Workplace/Employment Mediation',
    description: 'Handles conflicts between employees, or between employers and staff, such as wrongful termination or harassment cases.',
  },
  {
    value: 'property' as categoryTypeEnum,
    label: 'Landlord-Tenant Mediation',
    description: 'Focuses on disagreements over rent, repairs, lease agreements, or evictions.',
  },
  {
    value: 'consumer' as categoryTypeEnum,
    label: 'Consumer Disputes',
    description: 'Involves conflicts between consumers and service providers, manufacturers, or traders.',
  },
  {
    value: 'neighborhood' as categoryTypeEnum,
    label: 'Neighbourhood Disputes',
    description: 'Addresses issues like property boundaries, nuisance, or noise complaints.',
  },
];

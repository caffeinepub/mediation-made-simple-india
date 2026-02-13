import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface GuidanceResult {
    category: DisputeCategory;
    fullDispute: DisputeSpecificGuidance;
}
export interface DoAndDont {
    dos: Array<string>;
    donts: Array<string>;
}
export interface RecentDevelopmentInput {
    url: string;
    title: string;
    date: bigint;
    description: string;
}
export interface DisputeSpecificGuidance {
    nextSteps: Array<string>;
    dosAndDonts: DoAndDont;
    legalInformation: string;
    mediationSuitabilityGuidance: string;
    contextSpecificExamples: Array<string>;
}
export interface DisputeCategory {
    isMediationSuitable: boolean;
    title: string;
    legalAdvice: string;
    description: string;
    categoryTypeEnum: categoryTypeEnum;
    mediationReason: string;
}
export interface RecentDevelopment {
    id: bigint;
    url: string;
    title: string;
    date: bigint;
    description: string;
}
export interface UserProfile {
    name: string;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export enum categoryTypeEnum {
    money = "money",
    neighborhood = "neighborhood",
    divorce = "divorce",
    employment = "employment",
    business = "business",
    consumer = "consumer",
    property = "property",
    family = "family"
}
export interface backendInterface {
    addDevelopment(input: RecentDevelopmentInput): Promise<RecentDevelopment>;
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    editDevelopment(id: bigint, input: RecentDevelopmentInput): Promise<RecentDevelopment>;
    getAllCategories(): Promise<Array<DisputeCategory>>;
    getAllDevelopments(): Promise<Array<RecentDevelopment>>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getGuidanceByCategory(categoryTypeEnum: categoryTypeEnum): Promise<GuidanceResult | null>;
    getGuidanceByDescription(desc: string): Promise<{
        confidence: number;
        guidance?: GuidanceResult;
        bestMatch?: DisputeCategory;
    }>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
}

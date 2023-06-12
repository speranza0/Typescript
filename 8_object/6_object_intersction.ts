/**
 * Object Intersection
 */
type PrimitiveIntersection = string & number;

type PersonType = {
  name: string;
  age: number;
};

type CompanyType = {
  company: string;
  companyRegistrationNumber: String;
};

type PersonAndCompany = PersonType & CompanyType;

const jisoo: PersonAndCompany = {
  name: "지수",
  age: 32,
  company: "YG",
  companyRegistrationNumber: "xxxyyyyzzzz",
};

type PetType = {
  petName: string;
  petAge: number;
};

type CompanyOrPet = PersonType & (CompanyType | PetType);

const companyOrPer: CompanyOrPet = {
  //PersonType
  name: "코드팩토리",
  age: 32,

  // CompanyType
  company: "주식회사 코드팩토리",
  companyRegistrationNumber: "xxxyyyyzzzz",

  // PetType
  petName: "오리",
  petAge: 8,
};

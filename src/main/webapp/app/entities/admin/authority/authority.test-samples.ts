import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '3e26e919-ed7d-45ed-8f33-ac172f8b8c21',
};

export const sampleWithPartialData: IAuthority = {
  name: '27bbeeaf-89f9-43ff-a9a4-0f60745e2de2',
};

export const sampleWithFullData: IAuthority = {
  name: 'c2b2508e-b0fc-4bce-aaa3-c954e4191cbc',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

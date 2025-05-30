export interface JwtPayload {
  serviceNumber: string;
  password: string;
  issued?: number;
  expiration?: number;
}

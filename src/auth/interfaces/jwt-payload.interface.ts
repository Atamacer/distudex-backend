export interface JwtPayload {
  firstName: string;
  serviceNumber: string;
  issued?: number;
  expiration?: number;
}

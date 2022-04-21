import styled from '@emotion/styled';

export type JsonRpcVersion = '2.0';

export type JsonRpcId = number | string | void;
export interface JsonRpcRequest<T> {
  jsonrpc: JsonRpcVersion;
  method: string;
  id: JsonRpcId;
  params?: T;
}

interface JsonRpcResponseBase {
  jsonrpc: JsonRpcVersion;
  id: JsonRpcId;
}
export interface JsonRpcError {
  code: number;
  message: string;
  data?: unknown;
  stack?: string;
}
export interface JsonRpcSuccess<T> extends JsonRpcResponseBase {
  result: Maybe<T>;
}
export interface JsonRpcFailure extends JsonRpcResponseBase {
  error: JsonRpcError | string;
}
export declare type JsonRpcResponse<T> = JsonRpcSuccess<T> | JsonRpcFailure;

/* eslint-disable-next-line */
export interface JrpcProps {}

const StyledJrpc = styled.div`
  color: pink;
`;

export function Jrpc(props: JrpcProps) {
  return (
    <StyledJrpc>
      <h1>Welcome to Jrpc!</h1>
    </StyledJrpc>
  );
}

export default Jrpc;

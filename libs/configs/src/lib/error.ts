export enum ErrorCode {
  UNKOWN_ERROR = 0,
  FORBIDDEN_ERROR = 4001,
  NOT_FOUND = 4004
}

interface IProps {
  status: number;
  body: string;
}

export class RNError extends Error {
  public status: number;

  constructor(props: IProps) {
    super(props.body);
    this.status = props.status;
  }
}

const state: RootState = {
  snackbar: {
    message: "",
    show: false,
    timeout: 1500
  }
};

export interface Snackbar {
  message: string;
  show: boolean;
  timeout: number;
}

export interface RootState {
  snackbar: Snackbar;
}

export default state;

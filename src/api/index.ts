export const fakeAPI = <TResponse>(response: TResponse): Promise<TResponse> => 
  new Promise((resolve) => {
    setTimeout(() => resolve(response), 450);
  });

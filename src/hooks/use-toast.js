export function useToast() {
  const toast = ({ title }) => {
    alert(title);
  };

  return { toast };
}
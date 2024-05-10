import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
type Props = {
  title: string;
  description: string;
  cancel: string;
  actionText: string;
  action: () => void;
  onOpenChange: (open: boolean) => void;
};

export function DestructiveAlertDialog({
  title,
  description,
  cancel,
  action,
  actionText,
  onOpenChange,
  ...props
}: Props & React.ComponentPropsWithoutRef<typeof AlertDialog>) {
  return (
    <AlertDialog onOpenChange={onOpenChange} {...props}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{cancel}</AlertDialogCancel>
          <AlertDialogAction onClick={action}>{actionText}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

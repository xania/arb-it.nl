interface PageProps {
  class?: string;
  children: JSX.Children;
}
export function Page(props: PageProps) {
  return (
    <div class={["box-border h-full py-4 pl-4 last:pr-4", props.class]}>
      <div class="box-border h-full max-h-[99.9%] overflow-y-auto overflow-x-hidden border-2 border-solid border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-700 dark:text-white ">
        {props.children}
      </div>
    </div>
  );
}

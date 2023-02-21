import { defineComponent } from 'vue';
import ComponentUtil from './utils/ComponentUtil';
import './theme/index.scss';
export default ComponentUtil.withInstall(
  defineComponent({
    name: 'my-component',
    setup() {
      return () => <div>Vue Component Template</div>;
    }
  })
);
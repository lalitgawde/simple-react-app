import { useState } from 'react';
import TabButton from "../../component/TabButton";
import TabContent from "../../component/TabContent";
import { CORE_CONCEPTS } from '../../data';

function Examples(props) {
  const [activeTab, setActiveTab] = useState("Components");
  const onClickHandler = (active) => {
    setActiveTab(active);
  };

  return (
    <div>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          {CORE_CONCEPTS.map((exp) => {
            return (
              <TabButton onClick={onClickHandler} activeTab={activeTab}>
                {exp.title}
              </TabButton>
            )
          })}
          {/* <TabButton onClick={onClickHandler} activeTab={activeTab}>
            Jsx
          </TabButton>
          <TabButton onClick={onClickHandler} activeTab={activeTab}>
            Props
          </TabButton>
          <TabButton onClick={onClickHandler} activeTab={activeTab}>
            State
          </TabButton> */}
        </menu>
        <TabContent activeTab={activeTab} />
      </section>
    </div>
  );
}

export default Examples;
import styles from "./filter.module.scss";
import { Tab, Tabs } from "@mui/material";
import { FilterTabsProps } from "./type";

/**
 * FilterTabs component
 *
 * @param categories - 탭으로 표시할 카테고리들
 * @param currentCategory - 현재 선택된 카테고리
 * @param handleTabChange - 탭이 변경될 때 호출되는 핸들러
 */
const FilterTabs = ({
  categories,
  currentCategory,
  handleTabChange,
}: FilterTabsProps) => {
  return (
    <Tabs
      value={currentCategory}
      onChange={handleTabChange}
      aria-label="question category tabs"
      className={styles.container}
    >
      {categories.map((category) => (
        <Tab key={category} label={category} value={category} />
      ))}
    </Tabs>
  );
};
export default FilterTabs;

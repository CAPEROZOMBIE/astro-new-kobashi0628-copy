// src\library\taniguchi_date.ts

// 日付の加工
export const Taniguchi_Date = (dateString: string): string => {
    const date = new Date(dateString);
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
}
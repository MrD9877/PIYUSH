import { languages, frameworks, tools } from "@/lib/skills";
import Image from "next/image";
import React from "react";

export default function SkillTable() {
  const maxLength = Math.max(languages.length, frameworks.length, tools.length);

  const padded = (arr: { name: string; icon: string }[]) => {
    const newArr = [...arr];
    while (newArr.length < maxLength) newArr.push({ name: "", icon: "" });
    return newArr;
  };

  const rows = Array.from({ length: maxLength }).map((_, i) => [padded(languages)[i], padded(frameworks)[i], padded(tools)[i]]);

  return (
    <table className="w-10/12 table-fixed text-sm text-left text-silverText mx-auto font-popins border-separate border-spacing-y-2">
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            {row.map((item, index) => {
              return (
                <td className="py-2 w-1/3 " key={`td-${index}`}>
                  <div className="flex items-center gap-2">
                    {item.icon && <Image src={item.icon} alt={item.name} width={20} height={20} className="w-5 h-5 bg-transparent" />}
                    <span className="scrambleText-animation">{item.name}</span>
                  </div>
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

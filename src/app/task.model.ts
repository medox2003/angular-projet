// Slide 13 : modéliser une tâche
export interface Task {
  id: number;
  title: string;
  completed: boolean;
  // Union littérale : seules ces 3 valeurs sont autorisées (pas de faute de frappe possible)
  priority: 'low' | 'medium' | 'high';
  dueDate?: string; // propriété optionnelle (format 'AAAA-MM-JJ')
}

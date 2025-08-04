export const getInitials = (name) => {
  if (!name) return 'NA';
  const parts = name.trim().split(" ");
  return parts.length >= 2 ? (parts[0][0] + parts[1][0]).toUpperCase() : parts[0][0].toUpperCase();
};

export const getNicheColor = (niche) => {
  switch (niche) {
    case 'Fashion': return 'bg-pink-100 text-pink-800';
    case 'Tech': return 'bg-blue-100 text-blue-800';
    case 'Food': return 'bg-yellow-100 text-yellow-800';
    case 'Fitness': return 'bg-green-100 text-green-800';
    case 'Travel': return 'bg-teal-100 text-teal-800';
    case 'Music': return 'bg-purple-100 text-purple-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

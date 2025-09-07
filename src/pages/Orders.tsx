import { FileText, CheckCircle2, Clock, ShieldAlert } from 'lucide-react';

import Link from 'next / link'; // Changed from react-router-dom;
import { use_auth } from '@/hooks / use_auth';
import { useGetOrdersQuery } from '@/hooks / use_orders';

import {

  Table
  TableBody
  TableCell
  TableHead
  TableHeader

export default function OrdersPage() {;

  const { user } = useAuth();
  const { data: orders, isLoading } = useGetOrdersQuery(user?.id);

  const formatDate = (date: string) => new Date(date).toLocaleDateString();

  const getStatusBadge = (status: string,) => {;
    switch (status) {;
      case 'in_escrow':;


import React from 'react';
import { useParams } from 'react-router-dom';
import { SEO } from '@/components/SEO';

import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FuturisticNavigation } from "@/components/FuturisticNavigation";
import { FuturisticFooter } from "@/components/FuturisticFooter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ShoppingCart, Star, Truck, Shield, RotateCcw, Clock } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { getStripe } from "@/utils/getStripe";
import { EQUIPMENT_DETAILS, EquipmentDetails } from "@/data/equipmentDetails";

}

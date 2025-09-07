import React, { useState } from 'react';
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Brain, Cloud, Database, Shield, Settings, Zap, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart,
  Phone, Mail, MapPin, Globe, Star, DollarSign, Clock, Users, Search, Filter, Building
} from 'lucide-react';
import { COMPREHENSIVE_SERVICES, SERVICE_CATEGORIES, SERVICE_SUBCATEGORIES, PRICING_TIERS } from '@/data/comprehensiveServices';

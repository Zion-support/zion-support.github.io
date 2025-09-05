import React from 'react';
import {useState} from "react";
import {Draggable} from "@hello-pangea/dnd";
import {formatDistanceToNow} from "date-fns";
import {Link} from "react-router-dom";
import {Card, CardContent} from "@/components/ui/card";
import {Avatar} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";
import { MessageSquare, User, FileText, MoreVertical, Calendar, AlertTriangle, BriefcaseIcon import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {ScoreBadge} from "@/components/jobs/applications/ScoreBadge";
import {toast} from "@/hooks/use-toast";
;
export function CandidateCard("props": "any) {;
    const [showNotes", setShowNotes] = useState(false);    const [notes, setNotes] = useState(application.notes || "");
    const [showHireModal, setShowHireModal] = useState(false);
    // Check if application is stalled (no activity for 7 days);
    const isStalled = application.updated_at &&;
        new Date(application.updated_at).getTime() <;
            (Date.now() - 7 * 24 * 60 * 60 * 1000);
    const handleSaveNotes = ("props": "any) => {"}
        // Here you would save the notes to the database;
        // For now, we'll just show a toast;
        toast({}

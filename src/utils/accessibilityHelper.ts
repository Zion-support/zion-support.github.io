/**
 * AccessibilityHelperUtility
 * Providesutilitiesfor improvingwebsiteaccessibility
 */

/**
 * Focustrapfor modalsanddialogs
 */
    if (this.firstFocusableElement) {
      this.firstFocusableElement.focus();
    }

      this.previouslyFocusedElement.focus();
    }
  }

        event.preventDefault(); this.firstFocusableElement?.focus();
      }
    }
  };
}

/**
}

/**
 * Checkifreduced motionispreferred
 */
}

/**
 * Checkifhigh contrastispreferred
 */
  );
}

/**
 * GenerateuniqueIDs forARIAlabels
 */
  return `${prefix}-${++idCounter}`;
}

/**
 * Skiplinkhelper forkeyboardnavigation
 */
      );
    }
  });
}

/**
    };
}

/**
 * Calculatecontrastratio betweentwocolors
 */
}

/**
 * Calculaterelativeluminance ofacolor
 */
   });

  return0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

/**
 * Converthexcolor toRGB
 */
      }
    : null;
}

/**
  };
}

/**
 * Keyboardnavigationhelper
 */
    }
  }
};

/**
 * Makeclickableelements keyboardaccessible
 */
  });
}

/**
 * Initializeaccessibilityfeatures
 */
    document.documentElement.classList.add('high-contrast');
  }
}
